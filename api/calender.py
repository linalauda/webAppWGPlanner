from enum import Enum
from pydantic import BaseModel
from fastapi import FastAPI, Query, HTTPException, Depends, status, Path, Response
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.responses import JSONResponse
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

from fastapi.staticfiles import StaticFiles
#from api.openAi import router as api_openAi

from api.example import router as example_router


from fastapi import FastAPI

app = FastAPI()
app.include_router(example_router)


class CalendarEvent(BaseModel):
    id: int
    title: str
    description: str
    date: str
    time: str

calendar_events = []


# calendar CRUD Endpoints
#######################################################################
'''Calender'''

@app.post("/calendar/events/", response_model=CalendarEvent)
def add_calendar_event(event: CalendarEvent):
    calendar_events.append(event)
    return event

# Alle Ereignisse im Kalender abrufen
@app.get("/calendar/events/", response_model=List[CalendarEvent])
def get_calendar_events():
    return calendar_events

# Einzelnes Ereignis im Kalender abrufen
@app.get("/calendar/events/{event_id}", response_model=CalendarEvent)
def get_calendar_event(event_id: int):
    for event in calendar_events:
        if event.id == event_id:
            return event
    raise HTTPException(status_code=404, detail="Event not found")

# Ereignis im Kalender aktualisieren
@app.put("/calendar/events/{event_id}", response_model=CalendarEvent)
def update_calendar_event(event_id: int, event: CalendarEvent):
    for index, existing_event in enumerate(calendar_events):
        if existing_event.id == event_id:
            calendar_events[index] = event
            return event
    raise HTTPException(status_code=404, detail="Event not found")

# Ereignis aus dem Kalender löschen
@app.delete("/calendar/events/{event_id}")
def delete_calendar_event(event_id: int):
    for index, event in enumerate(calendar_events):
        if event.id == event_id:
            del calendar_events[index]
            return {"message": "Event deleted successfully"}
    raise HTTPException(status_code=404, detail="Event not found")