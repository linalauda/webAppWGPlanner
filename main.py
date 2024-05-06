from enum import Enum
from pydantic import BaseModel
from fastapi import FastAPI, Query, HTTPException, Depends, status, Path, Response
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi.responses import JSONResponse
from typing import List, Optional

from fastapi.staticfiles import StaticFiles
#from api.openAi import router as api_openAi


from fastapi import FastAPI

app = FastAPI()

#app.include_router(api_openAi, prefix="/api")


class Task(BaseModel):
    id: int
    title: str
    description: str
    completed: bool

class User(BaseModel):
    id: int
    username: str
    email: str
    password: str
    is_admin: bool
    wg_name: str

class CalendarEvent(BaseModel):
    id: int
    title: str
    description: str
    date: str
    time: str

tasks_db = []
users_db = []
calendar_events = []

# Tasks CRUD Endpoints
#####################################################################
'''Tasks'''

@app.post("/tasks/", response_model=Task)
def create_task(task: Task):
    tasks_db.append(task)
    return task

@app.get("/tasks/", response_model=List[Task])
def read_tasks():
    return tasks_db

@app.get("/tasks/{task_id}", response_model=Task)
def read_task(task_id: int):
    for task in tasks_db:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task: Task):
    for index, existing_task in enumerate(tasks_db):
        if existing_task.id == task_id:
            tasks_db[index] = task
            return task
    raise HTTPException(status_code=404, detail="Task not found")

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    for index, task in enumerate(tasks_db):
        if task.id == task_id:
            del tasks_db[index]
            return {"message": "Task deleted successfully"}
    raise HTTPException(status_code=404, detail="Task not found")


# Users CRUD Endpoints
#############################################################################
'''Users'''

@app.post("/users/", response_model=User)
def create_user(user: User):
    users_db.append(user)
    return user

@app.get("/users/", response_model=List[User])
def read_users():
    return users_db

@app.get("/users/{user_id}", response_model=User)
def read_user(user_id: int):
    for user in users_db:
        if user.id == user_id:
            return user
    raise HTTPException(status_code=404, detail="User not found")

@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: User):
    for index, existing_user in enumerate(users_db):
        if existing_user.id == user_id:
            users_db[index] = user
            return user
    raise HTTPException(status_code=404, detail="User not found")

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    for index, user in enumerate(users_db):
        if user.id == user_id:
            del users_db[index]
            return {"message": "User deleted successfully"}
    raise HTTPException(status_code=404, detail="User not found")


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