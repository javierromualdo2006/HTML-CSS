function createObject(name, subs) {
    const canal = {
        nombre: name,
        subscribers: subs,
        hash: name.length * subs,
        getStatus ()  {
            return `El canal de ${name} tiene ${sub} suscriptores`

        }
    }
}