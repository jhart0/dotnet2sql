import dotnet2sql from '../index'

describe( 'dotnet2sql Tests', () => {

    test('returns int primitive', () => {
      const input = 'int'
      const expected = "int"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns int', () => {
      const input = 'int'
      const expected = "int"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns int', () => {
      const input = 'Int32'
      const expected = "int"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns bigint', () => {
      const input = 'long'
      const expected = "bigint"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns bigint primitive', () => {
      const input = 'Int64'
      const expected = "bigint"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns smallint', () => {
      const input = 'short'
      const expected = "smallint"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns tinyint', () => {
      const input = 'byte'
      const expected = "tinyint"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns datetime', () => {
      const input = 'DateTime'
      const expected = "datetime"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns bool primitive', () => {
      const input = 'Boolean'
      const expected = "bit"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns bool', () => {
      const input = 'bool'
      const expected = "bit"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns nvarchar primitive', () => {
      const input = 'string'
      const expected = "nvarchar"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns nvarchar', () => {
      const input = 'String'
      const expected = "nvarchar"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });
    
    test('returns decimal primitive', () => {
      const input = 'Decimal'
      const expected = "decimal"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns decimal', () => {
      const input = 'decimal'
      const expected = "decimal"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });

    test('returns uniqueidentifier', () => {
      const input = 'Guid'
      const expected = "uniqueidentifier"
      const actual = dotnet2sql.getSqlTypeFromDotnet(input);
      expect(actual).toEqual(expected);
    });
});

