'''Import the SQLAlchemy parts'''

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
 
 
SQLALCHEMY_DATABASE_URL = "postgresql://postgres:admin@postgresserver/CoPlan"  # check directory  , where db located
 

'''Create the SQLAlchemy engine'''

engine = create_engine(
    SQLALCHEMY_DATABASE_URL     # JUST FOR SQL LITE, connect_args={"check_same_thread": False}
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)



'''Create the database models'''
Base = declarative_base()

Base.metadata.create_all(bind=engine)
 

app = FastAPI()

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)
    is_admin = Column(bool)
    wg_name = Column(String)