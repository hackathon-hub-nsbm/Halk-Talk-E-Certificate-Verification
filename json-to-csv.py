import csv
import json

with open('data.json', 'r') as file:
    data = json.load(file)

csv_data = csv.writer(open('data-w-hash.csv', 'w'))

csv_data.writerow(data[0].keys())


for row in data:
    csv_data.writerow(row.values())

