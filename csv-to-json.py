#!/bin/usr/env python3

import csv
import json
import hashlib

with open('data.csv', 'r') as file:
    data = file.read()

hashing_func = hashlib.sha256()

def get_hash(email: str):
    hashing_func.update(email.encode("utf-8"))
    return hashing_func.hexdigest()

csv_data = csv.DictReader(data.splitlines())
csv_data = [{"id": get_hash(row["email"]), "firstName": row["firstName"], "lastName": row["lastName"], "email": row["email"]} for row in csv_data]

with open('data.json', 'w') as file:
    json.dump(csv_data, file, indent=4)

