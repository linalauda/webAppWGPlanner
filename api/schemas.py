from typing import List, Optional, Generic, TypeVar, Union
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel

T = TypeVar ('T')

class Task(BaseModel):
    id: Optional[int]=None
    title: Optional[str]=None
    description: Optional[str]=None
    completed: bool

    class Main:
        orm_mode = True

class RequestTask(BaseModel):
    parameter: Task = Field(...)

class Response (GenericModel, Generic[T]):
    code: str
    status: str
    message: str
    result: Optional[T]


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