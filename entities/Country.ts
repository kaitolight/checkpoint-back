import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field, ObjectType, InputType } from "type-graphql";
import { MaxLength } from "class-validator";

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 5, type: "varchar" })
  code: string;

  @Field()
  @Column({ length: 255, type: "varchar" })
  name: string;

  @Field({ nullable: true })
  @Column({ length: 255, type: "varchar" })
  emoji?: string;
}

@InputType()
export class InputCountry {
  @Field()
  @MaxLength(255)
  name: string;

  @Field()
  @MaxLength(5)
  code: string;

  @Field({ nullable: true })
  @MaxLength(255)
  emoji?: string;
}
