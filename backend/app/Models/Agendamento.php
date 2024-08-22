<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agendamento extends Model
{
    use HasFactory;

    protected $fillable = [ 

        'dia', // dia que será agendado o local publico
        'mes', //mes que será agendado
        'horario', //horário que será agendado
        
    ];

}
