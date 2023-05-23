import { Arg, Mutation, Query, Resolver } from "type-graphql";
import datasource from "../db";
import { Country, InputCountry } from "../entities/Country";

@Resolver(Country)
export class CountryResolver {
  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    return await datasource.getRepository(Country).find();
  }

  @Query(() => Country)
  async getOneCountry(@Arg("code") code: string): Promise<Country> {
    const countryToFind = await datasource
      .getRepository(Country)
      .findOne({ where: { code: code } });

    if (countryToFind === null)
      throw new Error("Country not found in database, please check");

    return countryToFind;
  }

  @Mutation(() => Country)
  async createCountry(@Arg("data") data: InputCountry): Promise<Country> {
    if (data === null) throw new Error("No data in the query, please check");

    const existingCountry = await datasource
      .getRepository(Country)
      .findOne({ where: { name: data.name } });

    if (existingCountry) throw new Error("Country already exists in database");

    return await datasource.getRepository(Country).save(data);
  }
}
