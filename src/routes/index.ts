import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`
const router = Router();

const removeExtension = (fileName:string) => {
  const file = fileName.split('.').shift()
  return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = removeExtension(fileName);
  if (cleanName !== 'index'){
    console.log(`${cleanName}`);
    import(`./${cleanName}`).then((moduleRouter) => {
      router.use(`/${cleanName}`, moduleRouter.router)
    })
  }
})

export { router };