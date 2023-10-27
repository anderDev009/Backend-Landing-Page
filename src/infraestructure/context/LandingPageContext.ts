import { DataSource, Repository } from "typeorm";
import { DataSourceOptions } from "typeorm/browser";

export class LandingPageContext extends DataSource{
    constructor(ctx:DataSourceOptions,){
        super(ctx)
    }
}