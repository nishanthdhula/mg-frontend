<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('properties', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id');
    $table->string('title');
    $table->string('slug');
    $table->longText('description');
    $table->string('property_type');
    $table->string('listing_type');
    $table->double('price');
    $table->string('location');
    $table->double('latitude')->nullable();
    $table->double('longitude')->nullable();
    $table->boolean('featured')->default(false);
    $table->boolean('premium')->default(false);
    $table->string('status')->default('pending');
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
