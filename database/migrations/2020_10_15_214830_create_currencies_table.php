<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCurrenciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('currencies', function (Blueprint $table) {
            $table->softDeletes('deleted_at', 0);
            $table->string('name', 255);
            $table->string('slug', 255)->unique();
            $table->boolean('is_default')->default(false)->index();
        });

        Schema::table('users', function (Blueprint $table) {
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
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign('users_currency_foreign');
        });

        Schema::dropIfExists('currencies');

    }
}
