const localKey = "EXAMPLE_TOKEN";
const checkToken = () => {
  /**
   * aqui vas a verificar si esta el token en el local Storage con la llave EXAMPLETOKEN
   * SI ESTA pongo la sesion valida
   * si no devuelvo un false
   */
  const localToken = localStorage.getItem(localKey);
  if (!localToken) {
    // si no hay token retorno
    return { login: false };
  } else {
    // si en local Storage hay un token
    return { login: true, value: JSON.parse(localToken) };
  }
};

const saveToken = (token) => {
  localStorage.setItem(localKey, JSON.stringify(token));
  return { login: true };
};

const deleteToken = () => {
  localStorage.removeItem(localKey);
  return { login: false };
};

export { checkToken, saveToken, deleteToken };
