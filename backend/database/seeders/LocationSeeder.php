<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    public function run(): void
    {
        // Eliminar datos sin resetear ID (TRUNCATE suele fallar en Render)
        DB::table('locations')->delete();

        // Insertar nuevas sedes
        DB::table('locations')->insert([
            [
                'code' => 1,
                'name' => 'Sede Central',
                'image' => '/images/sede-central.jpg',
                'creation_date' => '2018-11-07',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'code' => 2,
                'name' => 'Sede Norte',
                'image' => '/images/sede-norte.jpg',
                'creation_date' => '2023-01-16',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
