Array.prototype.filterList = function (category) {
    return this.filter((item) => item.category === category);
};

String.prototype.unshiftForm = function (index) {
    return this.substring(index, this.length);
};