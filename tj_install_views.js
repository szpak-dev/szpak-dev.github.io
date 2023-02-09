import {dirname} from 'path';
import {get_database} from "./_tj/database.js";
import {store_category_file, store_product_file} from "./_tj/views.js"

const abs_file_path = name => `${dirname('.')}/${name}`;

const db = get_database(abs_file_path('_data/manufacturers.yaml'));

for (const manufacturer_id in db) {
    const manufacturer = db[manufacturer_id]

    for (const category_id in manufacturer.categories) {
        store_category_file(dirname('.'), manufacturer_id, category_id);
    }

    for (const product_id in manufacturer.products) {
        store_product_file(dirname('.'), manufacturer_id, product_id);
    }
}