<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Department;

class DepartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $data = [ 
            [
                'image' => 'img',
                'en_name' => 'Cardiologists',
                'my_name' => 'နုလုံးအထူးကု ဆရာဝန်ဦကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Cardiac Surgeon',
                'my_name' => 'နှလုံးခွဲစိတ်အထူးကုဆရာဝန်ကြီများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'General Physicians',
                'my_name' => 'အထွေထွေရောဂါကုဆရာဝန်ကြီးများ',
            ],
            [
                'image' => 'img',
                'en_name' => 'Oncologist',
                'my_name' => 'ကင်ဆာရောဂါကုဆရာဝန်ကြီများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Endocrinologist',
                'my_name' => 'ဆီချိုရောဂါကုဆရာဝန်ကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Rheumatologist',
                'my_name' => 'အရိုးအဆစ် အထူးကုဆရာဝန်ကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Nutritionsits',
                'my_name' => 'အဟာရဆိုင်ရာ ပညာရှင်များ',
            ],
            [
                'image' => 'img',
                'en_name' => 'General Surgeons',
                'my_name' => 'ခွဲစိတ်အထုကုဆရာဝန်ကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Psychiatrists',
                'my_name' => 'စိတ်ရောဂါကုအထူကု'
            ],
            [
                'image' => 'img',
                'en_name' => 'Gastroenterologist',
                'my_name' => 'အစာအိမ်နှင့် အူလမ်းကြောင်း ဆရာဝန်ကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Hepatologist',
                'my_name' => 'အသဲရောဂါကုဆရာဝန်ကြီးများ',
            ],
            [
                'image' => 'img',
                'en_name' => 'Obstertricians',
                'my_name' => 'သားဖွားမီယပ်ဆရာဝန်ကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Paediatricians',
                'my_name' => 'ကလေးအထုကုဆရာဝန်ကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Nephrologists',
                'my_name' => 'ဆီးနှင့်ကျောက်ကပ်အထူးကုဆရာဝန်းကြီးများ'
            ],
            [
                'image' => 'img',
                'en_name' => 'Dermatologists',
                'my_name' => 'အရေပြားအထူကုဆရာဝန်ကြီးများ',
            ],
            [
                'image' => 'img',
                'en_name' => 'Neurologists',
                'my_name' =>'ဦနှောက်နှင့် အာရုံကြောဆိုင်ရာ အထူးကု'
            ],
            [
                'image' => 'img',
                'en_name' => 'Haematologist',
                'my_name' => 'သွေရောဂါဆိုင်ရာ ဆရာဝန်ကြီးများ',
            ],
            [
                'image' => 'img',
                'en_name' => 'Radiologists',
                'my_name' =>'ဓါတ်မုန်ဘက်ဆိုင်ရာ ဆရာဝန်ကြီးများ'
            ],
        ];


        Department::insert($data);
    }
}
