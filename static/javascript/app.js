import { peticionPaxinaApp,isPaxina } from "./carpetaFuncions/funcions.js";
export const App = async () => {
  
  let resposta = await peticionPaxinaApp();
  isPaxina(resposta);
  
}
