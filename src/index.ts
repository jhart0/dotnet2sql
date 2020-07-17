export default class dotnet2sql {
    static getSqlTypeFromDotnet(typeName: string) {
        switch(typeName) { 
            case 'long':
            case 'Int64':
               return 'bigint'
            case 'int':
            case 'Int32':
                return 'int'
            case 'short':
            case 'Int16':
                return 'smallint'
            case 'byte':
                return 'tinyint'
            case 'bool':
            case 'Boolean':
                return 'bit'
            case 'string':
            case 'String':
                return 'nvarchar'
            case 'decimal':
            case 'Decimal':
                return 'decimal'
            case 'DateTime':
                return 'datetime'
            case 'Guid':
                return 'uniqueidentifier'
         }
    }
}