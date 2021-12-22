echo "Initializing . . ."

git add .

read input 

git commit -m "$input"

git push -u origin master

echo "git push Done :D"

