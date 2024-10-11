from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from .models import TouristSpot, Base, engine,User,BaseHotels,engine_hotels
from .database import SessionLocal
from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from pydantic import BaseModel
from .models import Hotel, BaseHotels, engine_hotels
from .database import SessionLocal
app = FastAPI()
Base.metadata.create_all(bind=engine)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
class TouristSpotCreate(BaseModel):
    zone: str
    state: str
    city: str
    name: str
    type: str
    establishment_year: int
    time_needed_to_visit_hrs: float
    google_review_rating: float
    entrance_fee_in_inr: int
    airport_within_50km: bool
    weekly_off: str
    significance: str
    dslr_allowed: bool
    number_of_google_reviews_lakhs: float
    best_time_to_visit: str

    class Config:
        orm_mode = True
@app.get("/travels/")
def read_tourist_spots(skip: int = 0, limit: int = 20, db: Session = Depends(get_db)):
    tourist_spots = db.query(TouristSpot).offset(skip).limit(limit).all()
    return tourist_spots

@app.get("/travels/{spot_id}")
def read_tourist_spot(spot_id: int, db: Session = Depends(get_db)):
    tourist_spot = db.query(TouristSpot).filter(TouristSpot.id == spot_id).first()
    if tourist_spot is None:
        raise HTTPException(status_code=404, detail="Tourist spot not found")
    return tourist_spot
@app.post("/travels/")
def create_tourist_spot(spot: TouristSpotCreate, db: Session = Depends(get_db)):
    new_spot = TouristSpot(**spot.dict())
    db.add(new_spot)
    db.commit()
    db.refresh(new_spot)
    return new_spot
@app.put("/travels/{spot_id}")
def update_tourist_spot(spot_id: int, spot: TouristSpotCreate, db: Session = Depends(get_db)):
    tourist_spot = db.query(TouristSpot).filter(TouristSpot.id == spot_id).first()
    if tourist_spot is None:
        raise HTTPException(status_code=404, detail="Tourist spot not found")
    
    for key, value in spot.dict().items():
        setattr(tourist_spot, key, value)
    db.commit()
    db.refresh(tourist_spot)
    return tourist_spot

@app.delete("/travels/{spot_id}")
def delete_tourist_spot(spot_id: int, db: Session = Depends(get_db)):
    tourist_spot = db.query(TouristSpot).filter(TouristSpot.id == spot_id).first()
    if tourist_spot is None:
        raise HTTPException(status_code=404, detail="Tourist spot not found")
    
    db.delete(tourist_spot)
    db.commit()
    return {"detail": "Tourist spot deleted successfully"}
@app.user("/signup/")
def users(username:str ,password:str,email:str,interest,):
    User.username=username
    User.password=password
    User.email=email
    User.interest=interest
@app.post("/login/")
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User does not exist. Please sign up.")
    if user.password != password:
        raise HTTPException(status_code=400, detail="Incorrect password.")
    
    return {"message": "Login successful", "user": {"username": user.username, "email": user.email, "interest": user.interest}}

# Create the tables in Hotels.db
BaseHotels.metadata.create_all(bind=engine_hotels)

def get_hotel_db():
    db = SessionLocal(bind=engine_hotels)
    try:
        yield db
    finally:
        db.close()
class HotelCreate(BaseModel):
    admin_name: str
    password: str
    hotel_name: str
    location: str

    class Config:
        orm_mode = True

@app.post("/Hotels/")
def create_hotel(hotel: HotelCreate, db: Session = Depends(get_hotel_db)):
    new_hotel = Hotel(
        admin_name=hotel.admin_name,
        password=hotel.password, 
        hotel_name=hotel.hotel_name,
        location=hotel.location
    )
    
    db.add(new_hotel)
    db.commit()
    db.refresh(new_hotel)
    return {"message": "Hotel added successfully", "hotel": new_hotel}
