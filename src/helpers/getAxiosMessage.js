export const getAxiosMessage = (errorCode) => {
  const codeMatcher = {
    ERR_NETWORK: "Error en la red!",
    ERR_BAD_REQUEST: "El servidor no pudo procesar la petición",
    USR_NOT_EXISTS: "El usuario o email no existe",
    LOGIN_INVALID_CREDENTIALS: "Email o contraseña incorrectos.",
    LOGIN_SERVER_ERROR: "Ocurrió un error en el servidor al iniciar sesión.",
    EMAIL_ALREADY_EXISTS: "El email ya está en uso",
    USER_CREATED: "Usuario creado correctamente",
    REGISTER_SERVER_ERROR: "Error en el servidor al crear un usuario",
    TOKEN_REFRESHED: "Sesión renovada correctamente",
    REFRESH_TOKEN_ERROR: "Error al renovar la sesión. Inicie sesión nuevamente",
    LOGIN_SUCCESSFUL: "Sesión iniciada correctamente",
    RECORD_CREATED: "Registro creado correctamente",
    CREATE_RECORD_ERROR: "Error en el servidor al crear el registro",
    RECORD_NOT_EXISTS: "El registro seleccionado no existe",
    UNAUTH_ACTION: "No tenés permisos para realizar esta acción",
    RECORD_UPDATED: "Registro actualizado correctamente",
    UPDATE_RECORD_ERROR: "Error en el servidor al actualizar el registro",
    DELETED_RECORD: "Registro eliminado correctamente",
    DELETE_RECORD_ERROR: "Error en el servidor al eliminar el registro",
    GET_RECORDS_ERROR: "Error al obtener todos los registros",
    NEED_TOKEN: "Acceso denegado. Se necesita iniciar sesión.",
    INVALID_TOKEN: "Token inválido. Inicie sesión nuevamente",
  };
  return codeMatcher[errorCode];
};
