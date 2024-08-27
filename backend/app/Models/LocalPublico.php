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

    // Relação com a Prefeitura
    public function prefeitura()
    {
        return $this->belongsTo(Prefeitura::class);
    }


    protected $fillable = [
        
        'nome', //nome do local publico
        'endereco', //endereço do local publico 
        
    ];

}
