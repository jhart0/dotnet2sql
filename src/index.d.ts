export default class dotnet2sql {
    static getSqlTypeFromDotnet(typeName: string): "bigint" | "int" | "smallint" | "tinyint" | "bit" | "nvarchar" | "decimal" | "datetime" | undefined;
}
