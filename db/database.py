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


class Base(DeclarativeBase): pass
 

class Person(Base):
    __tablename__ = "people"
 
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    age = Column(Integer,)
 

Base.metadata.create_all(bind=engine)
 

app = FastAPI()