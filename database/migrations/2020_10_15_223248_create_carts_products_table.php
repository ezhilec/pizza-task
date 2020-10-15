<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCartsProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('carts_products', function (Blueprint $table) {
            $table->bigInteger('cart_id');
            $table->bigInteger('product_id');
            $table->unsignedInteger('amount');
            $table->decimal('price', 8, 2);
            $table->string('currency', 255);

            $table->foreign('cart_id')->references('id')->on('carts');
            $table->foreign('currency')->references('slug')->on('currencies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('carts_products');
    }
}
