module.exports = {
    isNotEmpty : (data) => {
        return (data !==  null && data !== undefined && data !== "");
    },

    isNull: (n) => {
        return (n === null)
    },

    isUndefined: (n) => {
        return (n === undefined)
    },

    isNullOrUndefined: (n) => {
        return (n === null || n === undefined)
    },

    isNotNullNUndefined: (n) => {
        return (n !== null && n !== undefined)
    }

}