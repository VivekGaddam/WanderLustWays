import pandas as pd
import sqlite3

df = pd.read_csv('Top Indian Places to Visit.csv')

conn = sqlite3.connect('wanderlust.db')
cursor = conn.cursor()

create_table_query = '''
CREATE TABLE IF NOT EXISTS tourist_spots (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    zone TEXT,
    state TEXT,
    city TEXT,
    name TEXT,
    type TEXT,
    establishment_year INTEGER,
    time_needed_to_visit_hrs REAL,
    google_review_rating REAL,
    entrance_fee_in_inr INTEGER,
    airport_within_50km BOOLEAN,
    weekly_off TEXT,
    significance TEXT,
    dslr_allowed BOOLEAN,
    number_of_google_reviews_lakhs REAL,
    best_time_to_visit TEXT
);
'''

cursor.execute(create_table_query)

df.to_sql('tourist_spots', conn, if_exists='replace', index=False)


conn.commit()
conn.close()
