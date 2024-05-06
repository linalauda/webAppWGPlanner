from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List

app = FastAPI()

users = []

class User(BaseModel):
    id = int | None
    username: str
    email = str
    password = str
    bio: Optional[str]
    is_admin: bool



'''funktion die gibt Liste of users from typing import Optional, List'''

@app.get("/users/", response_model=List[User])
async def get_users():
    return users

@app.post("/users/", response_model=User)
async def create_user(user: User):
    users.append(user)
    return user


@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: User):
    for index, existing_user in enumerate(users):
        if existing_user.id == user_id:
            users[index] = user
            return user
    raise HTTPException(status_code=404, detail="Benutzer nicht gefunden")


@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    for index, user in enumerate(users):
        if user.id == user_id:
            del users[index]
            return {"message": "User deleted successfully"}
    raise HTTPException(status_code=404, detail="User not found")




#class User:
#    def __init__(self, name, mail, id):
#        self.name = name
#        self.mail = mail
#        self.id = str(uuid.uuid4())
#        isAdmin = bool


##################
#app.mount("/static", StaticFiles(directory="try"))

#taskGlobal = {}

#class A:
#    pass

#class B(A):
#    pass



class Task(BaseModel):
    task_id: int | None
    title: str
    description: str | None
    completed: bool

class User(BaseModel):
    id = int | None
    username: str
    email = str
    password = str
    bio: Optional[str]
    is_admin: bool

tasks = []
users = []

# Get all tasks
@app.get("/tasks/", response_model=List[Task])
def get_tasks():
    return tasks

# Create a new task
@app.post("/tasks/", response_model=Task)
def create_task(task: Task):
    tasks.append(task)
    return task

# Get a specific task by ID
@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    for task in tasks:
        if task.id == task_id:
            return task
    raise HTTPException(status_code=404, detail="Aufgabe nicht gefunden")


##############################################################################
'''Home'''

@app.get("/home")
def root():
    data = "Hello CoPlan"
    #return Response(content=data, media_type="text/plain", headers={"Secret-Code" : "123459"})
    return {"message": "Hello CoPlan"}

##############################################################################
'''User  funktion die gibt Liste of users from typing import Optional, List'''

@app.get("/users/", response_model=List[User])
async def get_users():
    return users

@app.post("/users/", response_model=User)
async def create_user(user: User):
    users.append(user)
    return user


@app.put("/users/{user_id}", response_model=User)
def update_user(user_id: int, user: User):
    for index, existing_user in enumerate(users):
        if existing_user.id == user_id:
            users[index] = user
            return user
    raise HTTPException(status_code=404, detail="Benutzer nicht gefunden")


@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    for index, user in enumerate(users):
        if user.id == user_id:
            del users[index]
            return {"message": "User deleted successfully"}
    raise HTTPException(status_code=404, detail="User not found")


##############################################################################


#@app.get("/task")
#async def get_tasks():
#    task = Task(name="Küche aufräumen")
#    return {"data": task}


#######################################################
"""authenticate_user"""

security = HTTPBasic()

async def authenticate_user(credentials: HTTPBasicCredentials = Depends(security)):
    correct_username = "admin"
    correct_password = "password"
    if credentials.username != correct_username or credentials.password != correct_password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Falscher Benutzername oder Passwort",
            headers={"WWW-Authenticate": "Basic"},
        )
    return credentials.username

########################################################
@app.get("/login")
async def read_root():
    return {"message": "Herzlich Willkommen im CoPlan!"}

#########################################################
@app.get("/protected/")
async def read_protected(username: str = Depends(authenticate_user)):
    return {"message": f"Hallo, {username}! Die Ressource ist geschützt."}


###############################

@app.get("/tasks")
async def get_task(aufgabe_id = "334"):
    return aufgabe_id

################################
'''not found'''

@app.get("/notfound", status_code=status.HTTP_404_NOT_FOUND)
def notfound():
    return  {"message": "Resource Not Found"}


############################
#status_code konstruktor der Klasse Response 

@app.get("/notfound")
def notfound():
    return JSONResponse(content={"message": "Resource Not Found"}, status_code=404)

############################
#@app.get("/users/{id}", status_code=200)
#def users(response: Response, id: int = Path()):
#    if id < 1:
#        response.status_code = 400
#        return {"message": "Incorrect Data"}
#    return  {"message": f"Id = {id}"}

##############################
