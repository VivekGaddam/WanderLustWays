from sqlalchemy import Column, String, Integer, Float, Boolean, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLite database URL
SQLALCHEMY_DATABASE_URL = "sqlite:///./wanderlust.db"

# Create an engine to connect to the SQLite database
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Create a Base class for the models
Base = declarative_base()

# Define the TouristSpot model
class TouristSpot(Base):
    __tablename__ = "tourist_spots"

    id = Column(Integer, primary_key=True, index=True)
    zone = Column(String, nullable=False)
    state = Column(String, nullable=False)
    city = Column(String, nullable=False)
    name = Column(String, nullable=False)
    type = Column(String, nullable=False)  
    establishment_year = Column(Integer)  # Year of establishment
    time_needed_to_visit_hrs = Column(Float)  
    google_review_rating = Column(Float)  # Google review rating
    entrance_fee_in_inr = Column(Integer)  # Entrance fee in INR
    airport_within_50km = Column(Boolean)  # True if there is an airport within 50km
    weekly_off = Column(String)  # Weekly off day (e.g., Sunday)
    significance = Column(String)  # Historical or cultural significance
    dslr_allowed = Column(Boolean)  # True if DSLR cameras are allowed
    number_of_google_reviews_lakhs = Column(Float)  # Number of Google reviews in lakhs
    best_time_to_visit = Column(String)  # Best time to visit (season, months)

# Define the User model
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    interest = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)

# Create the tables in the 'wanderlust.db' database
Base.metadata.create_all(bind=engine)

# Create an engine for the hotels
engine_hotels = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})

# Create a Base class for the Hotel model
BaseHotels = declarative_base()

# Define the Hotel model
class Hotel(BaseHotels):
    __tablename__ = "hotels"

    id = Column(Integer, primary_key=True, index=True)
    admin_name = Column(String, nullable=False)
    password = Column(String, nullable=False)
    hotel_name = Column(String, nullable=False)
    location = Column(String, nullable=False)

# Create the hotels table in the same database
BaseHotels.metadata.create_all(bind=engine_hotels)
