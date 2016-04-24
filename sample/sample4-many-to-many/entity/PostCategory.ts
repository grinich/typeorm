import {PrimaryColumn, Column} from "../../../src/columns";
import {Table} from "../../../src/tables";

@Table("sample4_post_category")
export class PostCategory {

    @PrimaryColumn("int", { autoIncrement: true })
    id: number;

    @Column()
    name: string;

}