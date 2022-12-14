"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VueloController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VueloController = class VueloController {
    constructor(vueloRepository) {
        this.vueloRepository = vueloRepository;
    }
    async create(vuelo) {
        return this.vueloRepository.create(vuelo);
    }
    async count(where) {
        return this.vueloRepository.count(where);
    }
    async find(filter) {
        return this.vueloRepository.find(filter);
    }
    async updateAll(vuelo, where) {
        return this.vueloRepository.updateAll(vuelo, where);
    }
    async findById(id, filter) {
        return this.vueloRepository.findById(id, filter);
    }
    async updateById(id, vuelo) {
        await this.vueloRepository.updateById(id, vuelo);
    }
    async replaceById(id, vuelo) {
        await this.vueloRepository.replaceById(id, vuelo);
    }
    async deleteById(id) {
        await this.vueloRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Vuelo model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, {
                    title: 'NewVuelo',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vuelos/count'),
    (0, rest_1.response)(200, {
        description: 'Vuelo model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Vuelo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Array of Vuelo model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Vuelo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vuelos'),
    (0, rest_1.response)(200, {
        description: 'Vuelo PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Vuelo)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vuelo, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vuelos/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vuelo model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Vuelo, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelo PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vuelo, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vuelo]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelo PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vuelo]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vuelos/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vuelo DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VueloController.prototype, "deleteById", null);
VueloController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VueloRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VueloRepository])
], VueloController);
exports.VueloController = VueloController;
//# sourceMappingURL=vuelo.controller.js.map