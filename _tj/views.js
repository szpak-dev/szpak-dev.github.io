import {writeFile} from "fs";

const filename = id => `2023-01-01-${id}.markdown`;

const clear_template = template => template.trim().replace('\t','')

const store_file = (abs_filename, content) => {
    writeFile(abs_filename, content, e => {
        if (e) {
            throw Error(e.message);
        }

        console.log(`File was saved: ${abs_filename}`);
    })
}

function generate_category_file_content(manufacturer_id) {
    return clear_template(
`
---
categories: ["${manufacturer_id}", "category"]
---
{% include manufacturer_category_products.liquid page = page %}
`
    );
}

function generate_product_file_content(manufacturer_id) {
    return clear_template(
`
---
categories: ["${manufacturer_id}", "product"]
---
{% include manufacturer_product.liquid page = page %}
 `
    );
}

export function store_category_file(root_path, manufacturer_id, category_id) {
    const file_path = `${root_path}/_categories/${filename(category_id)}`;
    store_file(file_path, generate_category_file_content(manufacturer_id));
}

export function store_product_file(root_path, manufacturer_id, product_id) {
    const file_path = `${root_path}/_products/${filename(product_id)}`;
    store_file(file_path, generate_product_file_content(manufacturer_id));
}
