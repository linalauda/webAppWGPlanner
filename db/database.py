'''Import the SQLAlchemy parts'''

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import  Column, Integer, String
from sqlalchemy.orm import sessionmaker
 
from fastapi import FastAPI
 
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"
 

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


'''Create a database URL for SQLAlchemy'''

#создаем базовый класс для моделей
class Base(DeclarativeBase): pass
 
# создаем модель, объекты которой будут храниться в бд
class Person(Base):
    __tablename__ = "people"
 
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    age = Column(Integer,)
 
# создаем таблицы
Base.metadata.create_all(bind=engine)
 
# приложение, которое ничего не делает
app = FastAPI()