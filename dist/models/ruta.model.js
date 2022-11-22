"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruta = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Ruta = class Ruta extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "origen", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "destino", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Ruta.prototype, "tiempo_estimado", void 0);
Ruta = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Ruta);
exports.Ruta = Ruta;
//# sourceMappingURL=ruta.model.js.map