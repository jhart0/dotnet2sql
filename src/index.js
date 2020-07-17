"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotnet2sql = /** @class */ (function () {
    function dotnet2sql() {
    }
    dotnet2sql.getSqlTypeFromDotnet = function (typeName) {
        switch (typeName) {
            case 'long':
            case 'Int64':
                return 'bigint';
            case 'int':
            case 'Int32':
                return 'int';
            case 'short':
            case 'Int16':
                return 'smallint';
            case 'byte':
                return 'tinyint';
            case 'bool':
            case 'Boolean':
                return 'bit';
            case 'string':
            case 'String':
                return 'nvarchar';
            case 'decimal':
            case 'Decimal':
                return 'decimal';
            case 'DateTime':
                return 'datetime';
            case 'Guid':
                return 'uniqueidentifier';
        }
    };
    return dotnet2sql;
}());
exports.default = dotnet2sql;
