<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('status', 255)->default('new')->index();
            $table->bigInteger('user_id')->nullable()->index();
            $table->string('delivery_type', 255);
            $table->decimal('delivery_cost', 8, 2);
            $table->string('name', 255);
            $table->string('surname', 255)->nullable();
            $table->string('address', 255)->nullable();
            $table->string('phone', 15);
            $table->decimal('total_cost', 8, 2);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
