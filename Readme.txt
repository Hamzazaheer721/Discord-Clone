1) npx create-react-app discord_clone --template redux

2) npm install @material-ui/core

3) npm install @material-ui/icons

4) npm i firebase


--- Deployment phase ---

5) firebase login

6) firebase init

-- choose hosting, press space and enter
-- then choose from existing projects and press enter
-- type build on being asking about public directory and press Enter!

7) npm run build

8) firebase deploy

    Hosting URL to this app:
    https://discord-clone-d3dd7.web.app


--- In case you want to make changes and redeploy --- 

9) npm run build && firebase deploy
    
    or

   npm run build 
   firebase deploy