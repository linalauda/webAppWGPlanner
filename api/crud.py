from sqlalchemy.orm import Session
from models import Task, User, CalendarEvent
from schemas import Task

def get_task(db:Session, skip:int=0, limit:int=100):
    return db.query(Task).offset(skip).limit(limit).all()

def get_task_by_id(db:Session, task_id:int):
    return db.query(Task).filter(Task.id == task_id).first()

def create_task(db:Session, task: Task):
    _task = Task (title=task.title.description=task.deskription )
    db.add(_task)
    db.commit()
    db.refresh(_task)
    return _task

def remove_task(db:Session, task_id:int):
    _task = get_task_by_id(db=db, task_id=task_id)
    db.delete(_task)
    db.commit()

def update_task(db:Session, task_id:int, title:str,description:str):
    _task = get_task_by_id(db=db,task_id=task_id)
    _task.title = title
    _task.description = description
    db.commit()
    db.refresh(_task)

    