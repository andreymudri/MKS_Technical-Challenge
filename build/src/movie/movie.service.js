"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieService = void 0;
var common_1 = require("@nestjs/common");
var MovieService = (function () {
    function MovieService() {
    }
    MovieService.prototype.create = function (createMovieDto) {
        return 'This action adds a new movie';
    };
    MovieService.prototype.findAll = function () {
        return "This action returns all movie";
    };
    MovieService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " movie");
    };
    MovieService.prototype.update = function (id, updateMovieDto) {
        return "This action updates a #".concat(id, " movie");
    };
    MovieService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " movie");
    };
    MovieService = __decorate([
        (0, common_1.Injectable)()
    ], MovieService);
    return MovieService;
}());
exports.MovieService = MovieService;
//# sourceMappingURL=movie.service.js.map