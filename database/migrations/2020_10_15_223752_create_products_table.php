<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->softDeletes('deleted_at', 0);
            $table->string('slug', 255)->unique();
            $table->string('name', 255);
            $table->decimal('price', 8, 2);
            $table->string('currency', 255);
            $table->string('image', 255)->nullable();
            $table->bigInteger('priority')->default(0);
            $table->text('description')->nullable();

            $table->foreign('currency')->references('slug')->on('currencies');
        });

        Schema::table('carts_products', function (Blueprint $table) {
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('carts_products', function (Blueprint $table) {
            $table->dropForeign('carts_products_product_id_foreign');
        });

        Schema::dropIfExists('products');
    }
}
