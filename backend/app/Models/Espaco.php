<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Espaco extends Model
{
    use HasFactory;

    public function agendamentos(){

        return $this->hasMany(Agendamento::class);

    }

    protected $fillable = [ 

        'tipo', //tipo do local que será agendado
        'disponivel' //local pode esta indisponivel 

    ];

}
