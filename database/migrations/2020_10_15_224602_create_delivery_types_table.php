<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDeliveryTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('delivery_types', function (Blueprint $table) {
            $table->string('name', 255);
            $table->string('slug', 255)->unique();
            $table->decimal('cost', 8, 2)->default(0);
            $table->text('description')->nullable();
        });

        Schema::table('orders', function (Blueprint $table) {
            $table->foreign('delivery_type')->references('slug')->on('delivery_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign('orders_delivery_type_foreign');
        });

        Schema::dropIfExists('delivery_types');
    }
}
