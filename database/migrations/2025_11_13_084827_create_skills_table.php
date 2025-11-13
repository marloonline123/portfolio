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
        Schema::create('skills', function (Blueprint $table) {
            $table->id();
            $table->json('name'); // Example: Frontend
            $table->json('item_1'); // Example: HTML5, CSS3, JavaScript
            $table->json('item_2'); // Example: VueJS, ReactJS
            $table->json('item_3'); // Example: Bootstrap, Tailwind, etc...
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('skills');
    }
};
