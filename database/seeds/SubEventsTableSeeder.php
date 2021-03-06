<?php

use App\Data\Models\Subevent as SubeventModel;
use Illuminate\Database\Seeder;

class SubEventsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(SubeventModel::class, 300)->create();
    }
}
