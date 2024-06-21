# Create Angular app, dockerize and publish to GitHub Pages

## 1. Create Angular app with @angular/cli v16.
- Server-side rendering (SSR) disabled,
- route file enabled, 
- CSS style format.

```
npx @angular/cli@16 new poke-buds-3.0.1 --routing true --style css
```

Do everything inside angular app folder.

```
cd poke-buds-3.0.1
```

Check if app is running using 

```
ng serve
```

Install dependencies:

```
npm i
```

And listen on default port 4200.

## 2. Create and edit Dockerfile.

```
touch Dockerfile
```

```
# Stage 1: Compile and Build angular codebase

# Use official node image as the base image
FROM node:latest as build

# Set the working directory
WORKDIR /usr/local/app

# Add the source code to app
COPY ./ /usr/local/app/

# Install all the dependencies
RUN npm install

# Generate the build of the application
RUN npm run build


# Stage 2: Serve app with nginx server

# Use official nginx image as the base image
FROM nginx:latest

# Copy the build output to replace the default nginx contents.
COPY --from=build /usr/local/app/docs /usr/share/nginx/html

# Expose port 80
EXPOSE 80
```

## 3. Create Docker image.

```
docker build -t yuribg/poke-buds-3.0.1:latest  .
```

Check docker image created.

```
docker image ls
```

## 4. Run Docker container.

```
docker run -d -p 8080:80 --name poke-buds-3.0.1 yuribg/poke-buds-3.0.1:latest
```

Check docker container running.

```
docker ps
```

## 5. Open app in port 8080.

[localhost:8080](http://localhost:8080/)

## 6. Post image to DockerHub.

```
docker login -u <username> -p <password>
docker push yuribg/poke-buds-3.0.1:latest
```

## 7. Deploy to GitHub Pages:

Check base href on build:

```
ng build --configuration=production --base-href=https://yuribg.github.io/poke-buds-3.0.1/ |
npm run nojekyll |
git add . && git commit -m "deploy GitHub Pages" && git push
```

Source:
[HOW TO DOCKERIZE AN ANGULAR APPLICATION WITH NGINX](https://levioconsulting.com/insights/how-to-dockerize-an-angular-application-with-nginx/)

# To Do - Next steps:

## To pokémon:

Models for Gen VIII - Sword and Shield

> [Pokémon SW-SH models](https://www.serebii.net/pokedex-swsh/)

> [Bulbapedia sprites](https://archives.bulbagarden.net/wiki/Category:Game_sprites)

> [Pokémon types and habilities](https://www.serebii.net/pokemon/nationalpokedex.shtml)

> [Pokémon GO models](https://archives.bulbagarden.net/wiki/Category:Pok%C3%A9mon_GO_models)

> [Pokémon models](https://archives.bulbagarden.net/wiki/Category:Sword_and_Shield_models)

> [Pokémon shiny models](https://archives.bulbagarden.net/wiki/Category:Sword_and_Shield_Shiny_models)

- Add shiny possibility OK
- Add types 
- Add stats 
- Add sound
- Add movement

## To game:

- Add name
- Add point system OK
- Fix white line below play again OK