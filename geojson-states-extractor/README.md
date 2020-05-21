# GeoJson states extractor.
This code extracts statewise geojson from districts-all-india.json and store it as seperate geojson files.
```
node code.js 
```
[home page](https://arunkumarv.github.io/geo.html)
## For Ladakh
For ladakh I used `kashmir_ladakh_siachen.json`.
Change the filename (line: 48 )- Uncomment 6 & comment 7 to 41 - 63 make ST_NM to st_nm. Refer the files.

### Credits
- I got `districts-all-india.json` from http://projects.datameet.org/maps/. GitHub is available at https://github.com/datameet/maps
- `kashmir_ladakh_siachen.json` is taken from https://github.com/india-in-data/kashmir