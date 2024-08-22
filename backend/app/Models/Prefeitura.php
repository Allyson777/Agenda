<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prefeitura extends Model
{
    use HasFactory;

    //uma prefeitura pode ter varios locais publicis

    public function locaisPublicos(){
        
        return $this->hasMany(LocalPublico::class);
    }

    //cidade em que a prefeitura está situada

    protected $fillable = [

        'cidade',

    ];
}
