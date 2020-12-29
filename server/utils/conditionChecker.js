module.exports = {
    isNotEmpty : (node) => {
        return (node !==  null && node !== undefined && node !== "");
    },
    isEmptyArray: (node) => {
        return node.length === 0;
    }
}