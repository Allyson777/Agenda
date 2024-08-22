<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LocalPublico extends Model
{
    use HasFactory;

    //um local publico pode ter vários espaços publicos

    public function espaco(){

        return $this->hasMany(Espaco::class);

    }

    protected $fillable = [
        'nome', //nome do local publico
        'rua', //rua do local publico
        'bairro', // bairro do local publico
        'prefeitura_id'
    ];

}
