# Go inside images folder with images.txt file listing all urls and run:
for /F "eol=;" %f in (filelist.txt) do curl -O %f